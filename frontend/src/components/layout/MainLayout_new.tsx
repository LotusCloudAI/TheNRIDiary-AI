export default function MainLayout({ children }: { children: React.ReactNode }) {
 return (
   <div>
     <header>Header Placeholder</header>
     <main>{children}</main>
     <footer>Footer Placeholder</footer>
   </div>
 )
}
