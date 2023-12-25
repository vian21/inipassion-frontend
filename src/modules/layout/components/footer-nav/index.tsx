"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import MedusaCTA from "../medusa-cta"

const FooterNav = () => {
  const { collections } = useCollections()
  // const { product_categories } = useProductCategories()

  return (
    <div className="border-t border-ui-border-base w-screen">
      <div className="content-container flex flex-col">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <Link
              href="/"
              className="m-3 txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              IniPassion
            </Link>

            <p className="text-small-regular m-3">Ottawa, Ontario, Canada</p>

            <div className="text-small-regular m-3 wr">
              <span className="font-medium">Email: </span>
              <a
                href="mailto:inipassion@gmail.com"
                className="underline decoration-blue-300 decoration-2"
              >
                inipassion@gmail.com
              </a>
            </div>

            <a
              href="tel:613 314 1263"
              className="text-small-regular m-3 underline decoration-blue-300 decoration-2"
            >
              +1 613 314 1263
            </a>
          </div>
          <div className="text-small-regular grid grid-cols-4 gap-x-10 md:gap-x-16">
            {/* {product_categories && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <Link
                          className={clsx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/${c.handle}`}
                        >
                          {c.name}
                        </Link>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <Link
                                    className="hover:text-ui-fg-base"
                                    href={`/${child.handle}`}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )} */}
            {collections && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul
                  className={clsx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <Link
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">
                Reseau Sociaux
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                    href="https://www.instagram.com/inipassion/"
                  >
                    Instragram
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                    href="https://www.tiktok.com/@ini.paasion"
                  >
                    Tiktok
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                    href="/faq"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">IniPassion</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <Link href="/about" className="hover:text-ui-fg-base">
                    Apropos
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-ui-fg-base">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/policy" className="hover:text-ui-fg-base">
                    Politique et confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} IniPassion. Tous les droits réservé.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
