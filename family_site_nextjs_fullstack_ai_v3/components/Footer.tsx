
export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="container mx-auto px-4 py-10 text-sm flex flex-col md:flex-row gap-4 justify-between">
        <div>© {new Date().getFullYear()} FAMILY. Alle rettigheder forbeholdes.</div>
        <div className="flex gap-4">
          <a href="/privacy">Privatliv</a>
          <a href="/terms">Vilkår</a>
          <a href="/sitemap.xml" rel="nofollow">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
