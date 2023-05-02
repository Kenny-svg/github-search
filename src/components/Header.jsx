import Search from "./Search";

const Header = () => {
    return ( 
        <>
        <div className="">
            <h1 className="font-bold text-5xl text-emerald-400 m-10">Find Me</h1>
            <div className="w-10/12 mx-auto">
                <Search />
            </div>
        </div>
  

        </>
     );
}
 
export default Header;