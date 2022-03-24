import NavBar from "./NavBar";
function Layout(params) {
  return (
    <div>
      <main>{params.children}</main>
      <NavBar />
    </div>
  );
}
export default Layout;
