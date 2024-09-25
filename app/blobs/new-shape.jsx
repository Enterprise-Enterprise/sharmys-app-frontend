"use client";

import { useEffect, useState } from "react";
import { generateBlob } from "app/blobs/generator";
import { ShapeRenderer } from "./renderer";
import { uploadShapeAction } from "./actions";
import { uploadDisabled } from "utils";

export function NewShape(props) {
  const { setLastMutationTime } = props;
  const [blobData, setBlobData] = useState();
  const [wasUploaded, setWasUploaded] = useState(false);

  const randomizeBlob = () => {
    setBlobData(generateBlob());
    setWasUploaded(false);
  };

  const onUpload = async () => {
    await uploadShapeAction({ parameters: blobData.parameters });
    setWasUploaded(true);
    setLastMutationTime(Date.now());
  };

  useEffect(() => {
    if (!blobData) {
      randomizeBlob();
    }
  }, [blobData]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="text-lg font-bold">New Random Shape</div>
      <div className="rounded bg-white">
        <div className="text-md w-full border-b border-neutral-900 p-2 text-center text-lg text-neutral-900">
          {blobData?.parameters?.name}
        </div>
        <div className="p-2">
          <ShapeRenderer
            svgPath={blobData?.svgPath}
            colors={blobData?.parameters?.colors}
          />
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button className="btn btn-primary" onClick={randomizeBlob}>
          Randomize
        </button>
        <button
          className="btn btn-primary"
          onClick={onUpload}
          disabled={uploadDisabled || wasUploaded || !blobData}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
