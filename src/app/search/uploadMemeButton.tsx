"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { IKUpload } from "imagekitio-next";

const UploadMemeButton = () => {
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
          <form action="">
            <Input
              name="displayName"
              placeholder="Display Name"
              required
            />
            <IKUpload
              fileName="test-upload.png"
              onError={(error) => {
                console.log("error", error);
              }}
              onSuccess={(response) => {
                console.log("done");
              }}
            />
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UploadMemeButton;
