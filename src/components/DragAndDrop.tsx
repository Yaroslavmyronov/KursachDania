import { BASE_URL } from "@/api/interceptors";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";


export default function DragAndDrop() {
  const { reputationId } = useParams<any>();
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleTitleInputChange = (e:any) => {
    setTitleInput(e.target.value);
  };

  const handleDescriptionInputChange = (e:any) => {
    setDescriptionInput(e.target.value);
  };

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
      }
    }
  }

  const handleClick = async (e:any) => {
    console.log(reputationId)
    e.preventDefault();

    const currentDate = new Date().toISOString();
    
    const formData = {
      mainSubjectId: Number(reputationId),
      title: titleInput,
      description: descriptionInput,
      date: currentDate
    };

    try {
      const response = await axios.post(`${BASE_URL}/Report/create-report`, formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error sending data", error);
    }
  };

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <div className='w-full flex justify-center flex-col items-center' >
    <div className="w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6" style={{marginBottom: '24px'}}>
      <div
        className={`${
          dragActive ? "" : ""
        }  p-4 rounded-lg  min-h-[10rem] text-center flex flex-col items-center justify-center w-full`}
        onClick={openFileExplorer} // Обработчик нажатия добавлен сюда
        onDragEnter={handleDragEnter}
        onSubmit={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
        <input
          placeholder="fileInput"
          className="hidden"
          ref={inputRef}
          type="file"
          multiple={true}
          onChange={handleChange}
          accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
        />
        <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt=""></img>
        <h3 className="mt-2 text-sm font-medium text-gray-900">
            <label className="relative cursor-pointer">
                <span>Drag and drop</span>
                <span className="text-indigo-600"> or browse </span>
                <span>to upload</span>
            </label>
        </h3>
        <p className="mt-1 text-xs text-gray-500">
            PNG, JPG, GIF up to 10MB
        </p>

        <div className="flex flex-col items-center p-3">
          {files.map((file: any, idx: any) => (
            <div key={idx} className="flex flex-row space-x-5">
              <span>{file.name}</span>
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => removeFile(file.name, idx)}
              >
                remove
              </span>
            </div>
          ))}
        </div>

        {/* <button
          className="bg-black rounded-lg p-2 mt-3 w-auto"
          onClick={handleSubmitFile}
        >
          <span className="p-2 text-white">Submit</span>
        </button> */}
      </div>
      
    </div>
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium">Title</label>
      <input 
        type="text" 
        id="default-input" 
        className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500" 
        style={{background: 'rgb(243, 244, 246)'}}
        value={titleInput}
        onChange={handleTitleInputChange}
      />
    </div>
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium">Description</label>
      <input 
        type="text" 
        id="default-input" 
        className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500" 
        style={{background: 'rgb(243, 244, 246)'}}
        value={descriptionInput}
        onChange={handleDescriptionInputChange}
      />
    </div>
    <div className="flex justify-center">
            <button onClick={handleClick} className='p-6' style={{backgroundColor: 'black', color: 'white', borderRadius: '6px', padding: '24px 48px', marginBottom: '120px', display: 'block'}}>
               Завантажити данні
            </button>
          </div>
    </div>
  );
}
