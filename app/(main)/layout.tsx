export default function MainLayout({
 children
}:{
 children:React.ReactNode
}) {
 return (
   <div className="
    bg-[#FAF9F6]
    text-slate-800
    font-sans
    min-h-screen
   ">
     {children}
   </div>
 )
}