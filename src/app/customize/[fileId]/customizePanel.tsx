"use client";

import { urlEndpoint } from "@/app/providers";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { useState } from "react";

const CustomizePanel = ({
  file,
}: {
  file: Pick<FileObject, "filePath" | "name">;
}) => {
  const [textOverlay1, setTextOverlay1] = useState("");
  const [textOverlay1position, setTextOverlay1position] = useState(0);
  const [textOverlay2position, setTextOverlay2position] = useState(0);
  const transformations = [];
  const xPosition = textOverlay1position / 100;
  const yPosition = textOverlay2position / 100;
  if (textOverlay1) {
    transformations.push({
      raw: `l-text,i-${textOverlay1},fs-50,lx-bw_mul_${xPosition.toFixed(
        1
      )},ly-bw_mul_${yPosition.toFixed(1)},l-end`,
    });
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      <form className="space-y-4">
        <Label htmlFor="textOverlay1">Text Overlay 1</Label>
        <Input
          id="textOverlay1"
          onChange={(e) => setTextOverlay1(e.target.value)}
          value={textOverlay1}
        />
        <Label>Text 1 X Positon</Label>
        <Slider
          value={[textOverlay1position]}
          onValueChange={([v]) => setTextOverlay1position(v)}
        />
        <Label>Text 1 Y Positon</Label>
        <Slider
          value={[textOverlay2position]}
          onValueChange={([v]) => setTextOverlay2position(v)}
        />
      </form>
      <IKImage
        path={file.filePath}
        urlEndpoint={urlEndpoint}
        alt={file.name}
        transformation={transformations}
      />
    </div>
  );
};

export default CustomizePanel;
