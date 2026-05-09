function validate()
{
    let input=document.getElementById("val").value.toLowerCase();
    let language=document.getElementById("language").value;
    let result=document.getElementById("ans");
    if(input.trim()==="")
    {
        result.innerHTML="⚠️ Please enter an error message.";
        return;
    }
    if(language === "")
    {
        result.innerHTML="⚠️ Please select a programming language.";
        return;
    }
    let selectedLanguage=errorDatabase[language];
    let found=false;
    for(let key in selectedLanguage)
    {
        if(input.includes(key))
        {
            let error=selectedLanguage[key];
            result.innerHTML=`
            <h2>${error.title}</h2>
            <h3>What is the Error?</h3>
            <p>${error.meaning}</p>
            <h3>How to Fix It?</h3>
            <p>${error.fix}</p>
            <h3>Example Program</h3>
            <pre>${error.example}</pre>
            `;
            found=true;
            break;
        }
    }
    if(!found)
    {
        result.innerHTML=`
        <h2>Unknown Error</h2>
        <p>No matching error found in database.</p>
        `;
    }
}