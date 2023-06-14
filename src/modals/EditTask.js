import React, {useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleChange = (e) => {

         const {name, value} = e.target

         if(name=== "taskName"){
            setTaskName(value)
         }
         if(name=== "description"){
             setDescription(value)
         }
         if(name=== "deadline"){
            setDeadline(value)
         }

    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setDeadline(taskObj.Deadline)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        tempObj['Deadline'] = deadline
        updateTask(tempObj)
    } 

    return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
           <form>
             <div className = "form-group">
                <label>Update Task</label>

                <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>

                <br></br>
             </div>
             <div className = "form-group">
                <label>Update Description</label>

                <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                
                <br></br>
             </div>
             <div className = "form-group">
                <label>Updated Deadline</label>
                <input type="date" className = "form-control" value = {deadline} onChange = {handleChange} name = "deadline"/>
             </div>
           </form>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>
                Update
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
        </ModalFooter>
    </Modal>
);
    }

export default EditTaskPopup;