import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
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

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["Deadline"] = deadline
        save(taskObj)
    } 

    return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
           <form>
             <div className = "form-group">
                <label>Task Name</label>

                <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>

                <br></br>
             </div>
             <div className = "form-group">
                <label>Description</label>

                <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                
                <br></br>
             </div>
             <div className = "form-group">
                <label>Deadline</label>
                <input type="date" className = "form-control" value = {deadline} onChange = {handleChange} name = "deadline"/>
             </div>
           </form>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={handleSave}>
                Create
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
        </ModalFooter>
    </Modal>
);
    }

export default CreateTaskPopup;