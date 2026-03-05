function toggleMenu() 
{
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
}

function toggleDescrizione(id) 
{
    const box = document.getElementById(id);
    const overlay = document.getElementById("overlay");

    const isHidden = box.classList.contains("hidden");

    if (isHidden)
    {
        box.classList.remove("hidden");
        void box.offsetWidth;         
        box.classList.add("show");

        overlay.classList.add("active");
        document.body.classList.add("description-open");
    } 
    else 
    {
        box.classList.add("hidden");
        box.classList.remove("show");

        overlay.classList.remove("active");
        document.body.classList.remove("description-open");
    }
}

function closeAllDescriptions() 
{
    const descriptions = document.querySelectorAll(".descrizione");
    const overlay = document.getElementById("overlay");

    descriptions.forEach(desc => 
    {
        desc.classList.add("hidden");
        desc.classList.remove("show");
    });

    overlay.classList.remove("active");
}

function showDateTime() 
{
    const box = document.getElementById("timeResult");

    if (box.classList.contains("hidden")) 
    {

        setInterval(() => 
        {
            const now = new Date();

            const giorno = now.getDate().toString().padStart(2, "0");
            const mese = (now.getMonth() + 1).toString().padStart(2, "0");
            const anno = now.getFullYear();

            const ore = now.getHours().toString().padStart(2, "0");
            const min = now.getMinutes().toString().padStart(2, "0");
            const sec = now.getSeconds().toString().padStart(2, "0");

            const data = `${giorno}/${mese}/${anno}`;
            const orario = `${ore}:${min}:${sec}`;

            box.innerHTML = `
                <div class='ora'>${orario}</div>
                <div class='data'>${data}</div>
            `;
        }, 1000);

        box.classList.remove("hidden");

    } 
    else 
    {
        box.classList.add("hidden");
    }
}

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) 
{
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_i2ipc0j';

    setTimeout(() => 
    {
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => 
            {
                btn.value = 'Send Email';
                alert('Sent!');
            })
            .catch((err) => 
            {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });

    }, 5000); 
});
