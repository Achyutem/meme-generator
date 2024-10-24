import { unstable_noStore } from "next/cache";
import imagekit from "@/lib/imagekit";
import { CustomizePanel } from "./customizePanel";
import { getFavoriteMeme } from "./loader";

const CustomizePage = async ({ params }: { params: { fileId: string } }) => {
  unstable_noStore();

  const file = await imagekit.getFileDetails(params.fileId);
  const isFavorited = await getFavoriteMeme(params.fileId);

  return (
    <div className="container mx-auto space-y-8 py-8 px-4">
      <CustomizePanel
        file={{
          filePath: file.filePath,
          name: file.name,
          fileId: file.fileId,
        }}
        isFavorited={isFavorited}
      />
    </div>
  );
};

export default CustomizePage;
