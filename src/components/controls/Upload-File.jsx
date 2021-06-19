import React from "react";
import AttachFile from "@material-ui/icons/AttachFileOutlined";
import Delete from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";

export const UploadFile = (props,key) => {

  const {handleDocument, handleDelete, image} = props;

  return (
    <div>
      <label className="upload-document">
        <input
          type="file"
          id="input-file"
          multiple
          key={key || ""}
          onChange={handleDocument}
        />
        <p className="text-center m-2">
          {image.preview ? (
            <img
              src={image.preview}
              alt="preview"
              width="80"
              className="img-fluid"
            />
          ) : (
            <img
              src="/img/app/upload.png"
              alt="upload.png"
              width="37"
              className="img-fluid"
            />
          )}
        </p>
      </label>
      {image.preview && (
        <div className="mt-2 row upload-selected">
          <div className="col-9">
            <AttachFile className="attachFile" />
            <span>{image.raw.name}</span>
          </div>
          <div className="col-3 text-right">
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleDelete}
            >
              <Delete className="file-upload-remove" />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};
