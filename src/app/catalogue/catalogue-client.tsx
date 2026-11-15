"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import type { RwdCategory, RwdProduct } from "@/data/rwd-catalogue";

type Props = {
  categories: RwdCategory[];
  products: RwdProduct[];
};

const PAGE_SIZE = 24;

export function CatalogueClient({ categories, products }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categoryId === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inName = product.name.toLowerCase().includes(q);
      const inModel = product.model.toLowerCase().includes(q);
      const inCategory = product.categoryName.toLowerCase().includes(q);
      const inDesc = product.description.toLowerCase().includes(q);
      const inHighlights = product.highlights.some((h) =>
        h.toLowerCase().includes(q)
      );

      return inName || inModel || inCategory || inDesc || inHighlights;
    });
  }, [products, selectedCategory, searchQuery]);

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setVisibleCount(PAGE_SIZE);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="catalogue-browser">
      {/* Search & Category Filter Controls */}
      <div className="catalogue-controls-wrapper">
        <div className="catalogue-search-row">
          <div className="catalogue-search-box">
            <span className="search-icon-holder" aria-hidden="true">
              <Icon name="target" size={18} />
            </span>
            <input
              type="text"
              className="catalogue-search-input"
              placeholder="Search across all 387 RWD products by model (e.g. 71000, R821, FS900, S712), instrument, or keyword..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              aria-label="Search catalogue"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => handleSearchChange("")}
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>
          <div className="catalogue-count-badge">
            Showing <strong>{Math.min(visibleCount, filteredProducts.length)}</strong> of{" "}
            <strong>{filteredProducts.length}</strong> matching products ({products.length} total)
          </div>
        </div>

        {/* Category Pills */}
        <div className="category-pills" role="tablist" aria-label="Filter by category">
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === "all"}
            className={`category-pill ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => handleCategoryChange("all")}
          >
            All Products ({products.length})
          </button>
          {categories.map((cat) => {
            const count = products.filter((p) => p.categoryId === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`category-pill ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <Icon name={cat.icon} size={14} />
                <span>{cat.shortName}</span>
                {count > 0 && <span className="pill-count">({count})</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Category Intro Banner */}
      {selectedCategory !== "all" && (
        <div className="category-banner">
          {(() => {
            const currentCat = categories.find((c) => c.id === selectedCategory);
            if (!currentCat) return null;
            return (
              <>
                <div className="category-banner-header">
                  <span className="category-banner-icon">
                    <Icon name={currentCat.icon} size={22} />
                  </span>
                  <div>
                    <h3>{currentCat.name}</h3>
                    <p>{currentCat.description}</p>
                  </div>
                </div>
                {currentCat.subcategories.length > 0 && (
                  <div className="category-subtags">
                    <span className="subtags-label">Key Subcategories:</span>
                    {currentCat.subcategories.map((sub) => (
                      <span key={sub} className="subtag-pill">
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </>
            );
          })()}
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <>
          <div className="catalogue-product-grid">
            {displayedProducts.map((product) => {
              const quoteLink = `/contact?product=${encodeURIComponent(
                `${product.name} (${product.model})`
              )}`;

              return (
                <article className="catalogue-item-card" key={product.id}>
                  {/* Header badges */}
                  <div className="catalogue-card-badges">
                    {product.bestSeller && (
                      <span className="product-badge badge-bestseller">
                        Best Seller
                      </span>
                    )}
                    {product.isNew && (
                      <span className="product-badge badge-new">New</span>
                    )}
                    {product.model && (
                      <span className="product-badge badge-model">
                        Model: {product.model}
                      </span>
                    )}
                  </div>

                  {/* Product Image */}
                  <div className="catalogue-card-media">
                    {product.image?.src ? (
                      <Image
                        src={product.image.src}
                        alt={product.image.alt || product.name}
                        width={400}
                        height={260}
                        className="catalogue-product-img"
                        unoptimized
                      />
                    ) : (
                      <div className="catalogue-img-placeholder">
                        <Icon name="microscope" size={36} />
                        <span>{product.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="catalogue-card-body">
                    <p className="catalogue-card-meta">
                      {product.manufacturer} · {product.categoryName}
                    </p>
                    <h4>{product.name}</h4>
                    {product.tagline && (
                      <p className="catalogue-card-tagline">{product.tagline}</p>
                    )}
                    <p className="catalogue-card-desc">{product.description}</p>

                    {/* Highlights */}
                    {product.highlights && product.highlights.length > 0 && (
                      <div className="catalogue-card-specs">
                        <span className="specs-heading">Key Features:</span>
                        <ul>
                          {product.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Action Link */}
                    <div className="catalogue-card-action">
                      <Link className="button button-small" href={quoteLink}>
                        Request Quote for {product.model || product.name} <Icon name="arrow" size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Load More Pagination */}
          {displayedProducts.length < filteredProducts.length && (
            <div className="catalogue-load-more-row">
              <button
                type="button"
                className="button"
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              >
                Load More Products ({filteredProducts.length - displayedProducts.length} remaining)
              </button>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => setVisibleCount(filteredProducts.length)}
              >
                Show All {filteredProducts.length} Products
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="catalogue-empty-state">
          <div className="empty-icon-circle">
            <Icon name="target" size={32} />
          </div>
          <h3>No matching equipment found</h3>
          <p>
            We couldn&apos;t find any equipment matching &ldquo;{searchQuery}&rdquo; in this category.
            NSH coordinates specialized sourcing across all RWD Life Science catalogues.
          </p>
          <div className="empty-state-actions">
            <button
              type="button"
              className="button button-small"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Reset Filters
            </button>
            <Link className="text-link" href="/contact">
              Send a custom sourcing enquiry →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
