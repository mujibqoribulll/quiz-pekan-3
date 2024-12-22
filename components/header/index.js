import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row justify-between bg-gray-900/30 py-5 px-2">
      <div>
        <h3 className="text-white text-2xl font-bold">
          Proddo{" "}
          <span className="text-base font-normal">(Productivity + Todo)</span>
        </h3>
      </div>
      <div>
        <ul>
          <Link href="/notes">
            <li className="text-base text-white font-semibold">Home</li>
          </Link>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
