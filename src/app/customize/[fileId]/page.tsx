import { imagekit } from "@/app/lib/imagekit";
import { unstable_noStore } from "next/cache";
import { CustomizePanel } from "./customizePanel";
import { getFavoriteMeme } from "./loaders";
import { auth } from "@/auth";

export default async function CustomizePage({
  params,
}: {
  params: { fileId: string };
}) {
  unstable_noStore();

  const session = await auth();

  const file = await imagekit.getFileDetails(params.fileId);
  const isFavorited = session ? await getFavoriteMeme(params.fileId) : false;

  return (
    <div className="container mx-auto space-y-8 py-8 px-4">
      <CustomizePanel
        isAuthenticated={!!session}
        file={{
          filePath: file.filePath,
          name: file.name,
          fileId: file.fileId,
        }}
        isFavorited={isFavorited}
      />
    </div>
  );
}

// import { imagekit } from "@/app/lib/imagekit";
// import { unstable_noStore } from "next/cache";
// import { CustomizePanel } from "./customizePanel";
// import { getFavoriteMeme } from "./loaders";
// import { auth } from "@/auth";

// const CustomizePage = async ({ params }: { params: { fileId: string } }) => {
//   unstable_noStore();

//   const session = await auth();

//   const file = await imagekit.getFileDetails(params.fileId);
//   const isFavorited = session ? await getFavoriteMeme(params.fileId) : false;

//   return (
//     <div className="container mx-auto space-y-8 py-8 px-4">
//       <CustomizePanel
//         isAuthenticated={!!session}
//         file={{
//           filePath: file.filePath,
//           name: file.name,
//           fileId: file.fileId,
//         }}
//         isFavorited={isFavorited}
//       />
//     </div>
//   );
// };

// export { CustomizePage };
