import type { LayoutProps } from "@/schemas/components"
import "./layout.module.css";

export const Layout = ({
  headerContent,
  mainContent,
  footerContent
}: LayoutProps) => {
  return (
    <>
      <header>
        {headerContent}
      </header>
      <main>
        {mainContent}
      </main>
      <footer>
        {footerContent}
      </footer>
    </>
  )
}
