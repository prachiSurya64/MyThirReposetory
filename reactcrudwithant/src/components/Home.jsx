import React, { useState } from 'react'
import {EditFilled  , DeleteFilled } from '@ant-design/icons'
import {Button, Input, Modal, Table} from "antd";

function Home() {
    
    const [isEditing , setIsEditing] = useState();
    const [editingStudent ,setEditingStudent] =useState(null);

    const [dataSource,setDataSource] =useState([
        {
            id:1,
            name:'Prachi',
            email:'Prachi@gmail.com',
            address:'Vijaynagar Indore',
        },
        {
            id:2,
            name:'PrachiSurya',
            email:'PrachiS@gmail.com',
            address:'BhagyaShree colony Indore',
        },
        {
            id:3,
            name:'Yash',
            email:'Yash@gmail.com',
            address:'Betul',
        },
        {
            id:4,
            name:'Prachi Suryawanhi',
            email:'Prachi6420@gmail.com',
            address:'Betul Madhya Pradesh',
        },
        {
            id:5,
            name:'Prachi',
            email:'Prachi@gmail.com',
            address:'Vijaynagar Indore',
        },
        {
            id:6,
            name:'PrachiSurya',
            email:'PrachiS@gmail.com',
            address:'BhagyaShree colony Indore',
        },
        {
            id:7,
            name:'Yash',
            email:'Yash@gmail.com',
            address:'Betul',
        },
        {
            id:8,
            name:'Prachi Suryawanhi',
            email:'Prachi6420@gmail.com',
            address:'Betul Madhya Pradesh',
        },
        {
            id:9,
            name:'Prachi',
            email:'Prachi@gmail.com',
            address:'Vijaynagar Indore',
        },
        {
            id:10,
            name:'PrachiSurya',
            email:'PrachiS@gmail.com',
            address:'BhagyaShree colony Indore',
        },
        {
            id:11,
            name:'Yash',
            email:'Yash@gmail.com',
            address:'Betul',
        },
        {
            id:12,
            name:'Prachi Suryawanhi',
            email:'Prachi6420@gmail.com',
            address:'Betul Madhya Pradesh',
        },
    ]);
    const columns=[
        {
        key:'1',
        title:'ID',
        dataIndex:'id',
        },
        {
            key:'2',
            title:'Name',
            dataIndex:'name',
            },
            {
            key:'3',
            title:'EMAIL',
            dataIndex:'email',
            },
            {
            key:'4',
            title:'Address',
            dataIndex:'address',
            },
            {
                key: "5",
                title: "Actions",
                render: (record) => {
                  return (
                    <>
                      <EditFilled
                        onClick={() => {
                          onEditStudent(record);
                        }}
                      />
                      <DeleteFilled
                        onClick={() => {
                          onDeleteStudent(record);
                        }}
                        style={{ color: "red", marginLeft: 12 }}
                      />
                    </>
                  );
                },
              },
            ];
          
       const onAddStudent =()=>{
       
        const randomNumber = parseInt(Math.random()*1000)

        const newStudent ={
            id: randomNumber,
            name: "Name" + parseInt(Math.random()*1000),
            email: randomNumber+"@gmail.com",
            address: 'Address : ' + randomNumber,   
        }

        setDataSource(pre => {
            return[...pre , newStudent]
        })
       };

       const onDeleteStudent =(record)=> {
        Modal.confirm({
            title:"Are you want to delete this student record",
            okText:"Yes",
            okType:"danger",
            onOk:()=>{
                setDataSource((pre) => {
                    return pre.filter((student) => student.id !== record.id);
                  });
            }
        });
       
      };

      const onEditStudent=(record)=>{
            setIsEditing(true);
            setEditingStudent({...record});
      }

      const resetEditing =(record)=>{
        setIsEditing(false);
        setEditingStudent(null);
      }
  return (
    <div className='Home'>
      <header className='Home-header'>
        <Button onClick={onAddStudent}>Add a New Student </Button>
        <Table 
        columns={columns}
        dataSource={dataSource}
        key="id"
        >
         </Table>
         <Modal
             title="Edit Student"
           open={isEditing} // Change 'visible' to 'open'
            okText="Save"
           onCancel={() => {
            resetEditing(false);
            // setIsEditing(false);
             }}
             onOk={() => {
                setDataSource((pre)=>{
                 return pre?.map((student) => {
                    if(student.id === editingStudent.id)
                    {
                        return editingStudent;
                    }
                    else{
                        return student;
                    }
                 });
                });
                resetEditing(false);
            }}
           >

<Input value={editingStudent?.name} onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })} />
<Input value={editingStudent?.email} onChange={(e) => setEditingStudent({ ...editingStudent, email: e.target.value })} />
<Input value={editingStudent?.address} onChange={(e) => setEditingStudent({ ...editingStudent, address: e.target.value })} />
           </Modal>

       {/* <Input value={editingStudent?.name}></Input> */}
      

      </header>
    </div>
  )
}
export default  Home