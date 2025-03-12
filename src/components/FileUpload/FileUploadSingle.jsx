import { useEffect, useState } from "react";
import { FILE_INPUT, TOAST_TYPE } from "src/consts/common";
import BackDropLoader from "../loaders/BackDropLoader";
import { useToaster } from "src/context/TosterContext";
import { IoMdCloudUpload } from "react-icons/io";

const FileUpload = ({ filetype, setFileInfoState ,isDisabled = false }) => {
  // States And Dependencies
  const { showToast } = useToaster();
  const [selectedFile, setSelectedFile] = useState();
  useEffect(() => {
    setFileInfoState({
      file: selectedFile,
      error: "",
    });
  }, [selectedFile]);

  const handleFileUpload = async (e) => {
    try {
      const files = Array.from(e.target.files);
      const allowedTypes = filetype.MIMES;
      const file = files[0];
      e.target.value = "";
      if (files.length === 0) return;
      if (!allowedTypes.includes(file.type)) {
        return showToast(filetype.ERROR_MESSAGE, TOAST_TYPE.ERROR);
      }
      if (file.size > filetype?.FILE_SIZE.SIZE) {
        return showToast(filetype?.FILE_SIZE.ERROR_MESSAGE, TOAST_TYPE.ERROR);
      }
      setSelectedFile(files[0]);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <>
      <input
        type="file"
        style={{ display: "none" }}
        id="fileUpload"
        accept={filetype?.TYPES}
        placeholder="Upload Image"
        onChange={(e) => {
          handleFileUpload(e);
        }}
        disabled={isDisabled}
      />
      <label className="fileupload-label" htmlFor="fileUpload">
        <span>Upload File</span>
        <img src="/images/upload-icon.svg" />
      </label>
    </>
  );
};

export default FileUpload;
