function krsApplication(name, programId, gpa) {
    const programStudyNames = {
      ACC: "Akuntansi",
      HIN: "Hubungan Internasional",
      IAB: "Ilmu Administrasi Bisnis",
      IAP: "Ilmu Administrasi Publik",
      MJN: "Manajemen",
      TKM: "Teknik Kimia",
    };
    const programStudyName = programStudyNames[programId];
  
    if (gpa < 0 || gpa > 4) {
      return "Invalid gpa number";
    }
  
    let maxSKS = 0;
    if (gpa >= 3) {
      maxSKS = 24;
    } else if (gpa >= 2.5) {
      maxSKS = 21;
    } else if (gpa >= 2) {
      maxSKS = 18;
    } else if (gpa >= 1.5) {
      maxSKS = 15;
    } else {
      maxSKS = 12;
    }
  
    const message = gpa >= 3
      ? `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${maxSKS} SKS untuk semester depan.`
      : `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programStudyName} dan hanya dapat mengambil SKS sebanyak ${maxSKS} SKS untuk semester depan.`;
  
    return message;
  }
  
  function processArgv() {
    const [, , name, programId, gpa] = process.argv;
    return krsApplication(name, programId, parseFloat(gpa));
  }
  
  if (process.env.NODE_ENV !== "test") {
    console.log(processArgv());
  }
  
  module.exports = krsApplication;
  