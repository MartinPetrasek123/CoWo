function show(el){
  document.getElementById('registration').classList.add('hidden');
  document.getElementById('test').classList.add('hidden');
  document.getElementById('main').classList.add('hidden');
  document.getElementById(el).classList.remove('hidden');
}

document.getElementById('regForm').addEventListener('submit', function(e){
  e.preventDefault();
  const heslo = document.getElementById('heslo').value;
  const heslo2 = document.getElementById('heslo2').value;
  if(heslo !== heslo2){
    alert('Hesla se neshodují');
    return;
  }
  show('test');
});

document.getElementById('testDone').addEventListener('click', function(){
  show('main');
});
