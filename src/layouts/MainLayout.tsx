import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="bg-[#E5E5E5]">
      <div className="flex rounded-[24px] bg-[#F9F6F4]">
        <div className="w-[320px]">
          <Menu />
        </div>
        <div className="w-[1600px]">
          <Navbar />
          <div className=" bg-[#FFFFFF] rounded-[24px] mr-[24px] mb-[32px] pb-[20px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
