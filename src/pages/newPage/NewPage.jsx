import './newPage.scss';
import pic from '../../assets/no-image.jpg';
import Userdata from '../../components/Userdata';
import { useEffect, useState } from 'react';
import { logDOM } from '@testing-library/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth, storage } from '../../config/Authconfig';
import { collection, addDoc, setDoc, doc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';


const NewPage = ({ data, title, type }) => {

  let [File, setFile] = useState('');
  let [inputsData, setinputsData] = useState({});
  let [uploadperc, setuploadperc] = useState(null);
  let navigate = useNavigate()

  useEffect(() => {
    let uplaodimage = () => {
      console.log('begin');
      const storage = getStorage();
      const storageRef = ref(storage, new Date().getTime() + File.name);
      const uploadTask = uploadBytesResumable(storageRef, File);
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setuploadperc(progress)
          console.log('uploading');
          switch (snapshot.state) {
            case 'paused':
              break;
            case 'running':
              break;
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setinputsData((prv) => {
              return { ...prv, img: downloadURL }
            })
          });
        }
      );


    }
    console.log(File);
    File && uplaodimage()

  }, [File])

  let handleinput = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setinputsData({ ...inputsData, [id]: value })
    console.log(inputsData);
  }

  let Adduser = async (e) => {
    try {
      const resp = await createUserWithEmailAndPassword(auth, inputsData.Email, inputsData.Password)

      await setDoc(doc(db, "users", resp.user.uid), {
        ...inputsData,
        timeStamp: serverTimestamp()
      });
      navigate(-1)


    } catch (err) {
      console.log(err)
    }


  }

  let Addproduct = async () => {
    let res = await addDoc(collection(db, "products"), {
      ...inputsData, timeStamp: serverTimestamp()
    })
    navigate(-1)



  }

  return (
    <div className='new__main'>
      <h1 className='title'>{title}</h1>
      <div className="new__mid">

        <div className="new__left">
          <img className='img' src={File ? URL.createObjectURL(File) : pic} alt="pic" />
          <div className='file__div'>
            <label className='Edit' htmlFor="file">Edit Image</label>
            <input onChange={e => setFile(e.target.files[0])} type="file" className='chooseFile' id='file' />
          </div>
        </div>
        <div className="new__right">
          {data.map((data) => {
            return (

              <div className='input__div' key={data.title}>
                <label className='new__label' htmlFor={data.title}>{data.title}:</label>
                <input className='new__input' type="text" id={data.title} placeholder={data.placeholder} onChange={e => handleinput(e)} />
              </div>
            )
          })}


          <button disabled={uploadperc < 100 && uploadperc !== null} className={type == "user" ? " btn" : "btn hide"} onClick={Adduser}>Send</button>
          <button disabled={uploadperc < 100 && uploadperc !== null} className={type == "product" ? " btn" : "btn hide"} onClick={Addproduct}>ADD</button>
        </div>
      </div>


    </div>
  )
}

export default NewPage