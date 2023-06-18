const app = Vue.createApp({
    data() {
      return {
        schools: [],
        searchName: ''
      };
    },
    //เรียกข้อมูลจาก collection schools
    mounted() {
      const ref = firebase.firestore().collection('schools');
      ref.onSnapshot(snapshot => {
        let schools = [];
        snapshot.forEach(doc => {
          schools.push({ ...doc.data(), id: doc.id });
        });
        this.schools = schools;
      });
    },
    methods: {
        //serch หาจากชื่อ
      searchSchools() {
        const searchValue = this.searchName.toLowerCase();
        const filteredSchools = this.schools.filter(school => {
          const schoolName = `${school.name.thai} ${school.name.english}`.toLowerCase();
          return schoolName.includes(searchValue);
        });
        this.schools = filteredSchools;
      }
    }
  });
  
  const vueApp = app.mount('#app'); 
  
  //submit serchform --> แล้วใช้ฟังชันเสริจหาชื่อ
  document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    vueApp.searchName = document.getElementById('nameInput').value;
    vueApp.searchSchools();
    document.getElementById('searchForm').reset();
    document.getElementById('searchForm').classList.remove('active'); // serch เสดแล้ว serchform หาย
  });
  

  
