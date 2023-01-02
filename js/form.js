const serviceID = 'service_chj8vfp';
const modalTemplateID = 'template_v4ktucd';
const footerTemplateID = 'template_b2b6mw7  ';


const formModal = document.getElementById('my-form-modal');
const formFooter = document.getElementById('my-form-footer');


formModal.addEventListener("submit", handleSubmitModalForm);
formFooter.addEventListener("submit", handleSubmitFooterForm);

async function handleSubmitModalForm(evt) {
    evt.preventDefault();
    const status = document.getElementById("modal-form-status");

    const paramsModal = {
        name: document.getElementById('name-modal').value,
        email: document.getElementById('email-modal').value,
        message: document.getElementById('message-modal').value,
    };

    formModal.style.display = 'none';
    status.style.display = 'block';

    emailjs.send(serviceID, modalTemplateID, paramsModal).then((res) => {
        console.log(res);
    }).catch((err) => { console.log(err) })
    
    evt.currentTarget.reset();
}

async function handleSubmitFooterForm(evt) {
    evt.preventDefault();
    
    const paramsFooter = {
        email: document.getElementById('email-footer').value,
    };


    emailjs.send(serviceID, footerTemplateID, paramsFooter).then((res) => {
        console.log(res);
    }).catch((err) => { console.log(err) })
    
    evt.currentTarget.reset();
}