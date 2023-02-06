import React, { useState } from "react";
import lighthouse from '@lighthouse-web3/sdk';
import styles from "../styles/Dao.module.css";

type Props = {}

const Dao = (props: Props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Description:', description);
  };

  const progressCallback = (progressData: { total: any; uploaded: any; }) => {
    let percentageDone =
      100 +(- (progressData?.total / progressData?.uploaded)?.toFixed(2));
    console.log(percentageDone);
  };

  const deploy = async(e:any) =>{
    // Push file to lighthouse node
    // Both file and folder supported by upload function
    const output = await lighthouse.upload(e, "6d7fb042-c9a9-4e5c-a035-27b62377188e", progressCallback);
    console.log('File Status:', output);
    /*
      output:
        {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */
        
      console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
  }

  return (
    <div className={styles.Dao}>
      <h1 className={styles.h1Alignment}>Submit a Proposal</h1>
      <span className={styles.spanAlignment}>New font designs are added to the DAO via governance proposal. </span>
      <span className={styles.spanAlignment}>A minimum of 100 $TYPE is required to submit proposals.</span>
      <h2 className={styles.h2Alignment}>New Proposal</h2>

      <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', width: '100%', textAlign: 'left', paddingLeft: '15rem', paddingTop: '2rem' }}>
        <div style={{ width: '100%' }}>Name of Font:</div>
        <div style={{ width: '100%' }}>
          <input type="text" placeholder="Name of Font" style={{width:'20rem', backgroundColor: '#404040', color:'white'}} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div style={{ display: 'flex', width: '100%', textAlign: 'left', paddingLeft: '15rem', paddingTop: '2rem'   }}>
        <div style={{ width: '100%' }}>Description:</div>
        <div style={{ width: '100%' }}>
          <textarea style={{width: '20rem', height:'15rem', backgroundColor: '#404040', color:'white'}} placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
      </div>
      <div style={{ display: 'flex', width: '100%', textAlign: 'left', paddingLeft: '15rem', paddingTop: '2rem'  }}>
        <div style={{ width: '100%' }}>Upload File:</div>
        <div style={{ width: '100%' }}>
        <input style={{backgroundColor: '#404040'}}onChange={e=>deploy(e)} type="file" />
        </div>
      </div>

      <div style={{ display: 'flex', width: '100%', textAlign: 'left', paddingLeft: '15rem', paddingTop: '2rem'  }}>
        <div style={{ width: '100%' }}></div>
        <div style={{ width: '100%' }}><br></br>
        <button style={{ padding: '5px 30px', backgroundColor: 'blue', color: 'white', cursor:'pointer' }}type="submit">Submit</button>
        </div>
      </div>
    </form>
    </div>
  );

}

export default Dao;