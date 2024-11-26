import HomePageComponent from "@/Component/HomePageComponent/HomePageComponent";
import PublicLayout from "@/Component/PublicLayout";


export default function Home() {
  return (
    <div>
     <PublicLayout> 
      <HomePageComponent/>
     </PublicLayout>
    </div>
  );
}
