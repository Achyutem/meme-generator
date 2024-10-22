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
import { useRef } from "react";

const UploadMemeButton = () => {
  const uploadInputref = useRef<HTMLInputElement>(null);
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
          <form onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="displayName">Display Name</Label>
            <Input
              id="displayName"
              name="displayName"
              placeholder="Display Name"
              required
            />
            <IKUpload
              fileName="test-upload.png"
              onError={(error) => {
                console.log("error", error);
              }}
              onSuccess={(response) => {}}
              style={{ display: "none" }}
              ref={uploadInputref}
            />
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <Button type="submit">Upload</Button>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UploadMemeButton;
