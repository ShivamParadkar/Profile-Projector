console.log("Hi There");

// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Emma Watson',
        age: 26,
        city: 'Texas',
        language: 'Python & JavaScript',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/64.jpg'
    },

    {
        name: 'Kristen Stewart',
        age: 28,
        city: 'New-York',
        language: 'C++ & JavaScript',
        framework: 'Bootstrap & React JS',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },

    {
        name: 'Bulma',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Ada Wong',
        age: 23,
        city: 'Los-Angelous',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Michael Scofield',
        age: 27,
        city: 'washington DC',
        language: 'PHP',
        framework: 'Node JS',
        image: 'https://randomuser.me/api/portraits/men/73.jpg'
    },

    {
        name: 'Kratos',
        age: 34,
        city: 'olumpus',
        language: 'C++',
        framework: 'OOPS C++',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },

    {
        name: 'Leon Kennedy',
        age: 24,
        city: 'california',
        language: 'JavaScript',
        framework: 'React Native',
        image: 'https://randomuser.me/api/portraits/men/28.jpg'
    },

    {
        name: 'Saitama One-punch man',
        age: 21,
        city: 'Tokyo',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },

    {
        name: 'John',
        age: 40,
        city: 'Pittsburgh',
        language: 'C , C++ , Java , Python , Ruby , JavaScript , Kotlin , Go , swift , PHP , C# , R , Delphi , Pascal , IsLips & many more....',
        framework: ' Django , react native , Angular , Flask ,Ruby on Rails , Laravel , vue.js , jQuery , Express.js , Bootstrap , meteor , ASP.NET , CakePHP , web2py , FuelPHP , Next.js , Pop PHP & many more...',
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
    }
]

function getData(){
    let url = 'https://randomuser.me/api/';

    fetch(url).then((response) => {
            return response.json();
    }).then((data) => {
        console.log(data);
        return data;
    })
}




let data2 = getData();
// CV Iterator
function cvIterator(data){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<data.length ?
            {value: data[nextIndex++], done: false} :
            {done: true}
        }
    };
}



const candidates = cvIterator(data);


nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item name"><b>${currentCandidate.name}</b></li>
    <li class="list-group-item attr">${currentCandidate.age} years old</li>
    <li class="list-group-item attr">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item attr">Primarily works on <b>${currentCandidate.language}</b></li>
    <li class="list-group-item attr">Uses <b>${currentCandidate.framework}</b> framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}
