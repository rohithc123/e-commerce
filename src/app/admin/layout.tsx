import { Nav, Navlink } from "@/components/Nav";

//this is done to avoid caching this is good for admin pages sinces admins typically have good internet speeds and need up to date changes
//and frequency of admin access is relatively less compared to that of users page
//since users use more often without caching there can be significant drop in performance
export const dynamic = "force-dynamic"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <Navlink href="/admin">Dashboard</Navlink>
        <Navlink href="/admin/products">Products</Navlink>
        <Navlink href="/admin/users">Customers</Navlink>
        <Navlink href="/admin/orders">Sales</Navlink>
      </Nav>
      <div className="container my-6">{children}</div>
      {/* <div>Hello</div> */}
    </>
  );
}
