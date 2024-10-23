import { unstable_noStore } from "next/cache";
import imagekit from "@/lib/imagekit";
import { CustomizePanel } from "./customizePanel";

const CustomizePage = async ({ params }: { params: { fileId: string } }) => {
  unstable_noStore();

  const file = await imagekit.getFileDetails(params.fileId);

  return (
    <div className="container mx-auto space-y-8 py-8 px-4">
      <h1 className="text-4xl font-bold">Customize</h1>
      <CustomizePanel
        file={{
          filePath: file.filePath,
          name: file.name,
        }}
      />
    </div>
  );
};

export default CustomizePage;
