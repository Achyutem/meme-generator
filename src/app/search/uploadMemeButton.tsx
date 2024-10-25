"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IKUpload } from "imagekitio-next";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const UploadMemeButton = () => {
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [tags, setTags] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Upload Base Meme</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload your meme image.</DialogTitle>
          <DialogDescription>
            Anyone on the server can use this image to build upon.
          </DialogDescription>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              setIsUploading(true);
              e.preventDefault();
              uploadInputRef.current?.click();
            }}>
            <div>
              <div className="mb-4">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  name="displayName"
                  placeholder="Display Name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="tags">Display Tags</Label>
                <Input
                  id="tags"
                  name="tags"
                  placeholder="A comma delimited set of Tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  required
                />
              </div>
              <IKUpload
                fileName="test-upload.png"
                tags={[displayName, ...tags.split(",")]}
                customMetadata={{ displayName }}
                onError={(error) => {
                  console.log("error", error);
                }}
                onSuccess={(response) => {
                  setIsUploading(false);
                  router.push(`/customize/${response.fileId}`);
                }}
                style={{ display: "none" }}
                ref={uploadInputRef}
              />
            </div>
            <DialogFooter className="flex justify-end">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={isUploading}>
                {isUploading && <SpinnerFunction />}
                Select and Upload Image
              </Button>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UploadMemeButton;

const SpinnerFunction = () => {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
};
