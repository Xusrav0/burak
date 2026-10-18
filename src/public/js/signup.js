console.log("Signup frontend javascript file");

// $(function () {
//   $(".member-nick").click(function () {
//     $(".member-phone").toggle();
//   });
// });

$(function () {});
$(function () {
  const fileTarget = $(".file-box .upload-hidden"); // document.querySelector(".file-box .upload-hidden")
  let filename;

  fileTarget.on("change", function () {
    if (window.FileReader) {
      const uploadFile = $(this)[0].files[0];
      if (!uploadFile) return;

      console.log("uploadFile:", uploadFile);
      const fileType = uploadFile.type;
      const validImageType = ["image/jpg", "image/jpeg", "image/png"];
      if (!validImageType.includes(fileType)) {
        alert("Please insert only jpeg, jpg and png");
        $(this).val("");
        $(this).siblings(".upload-name").val("Choose image");
      } else {
        console.log(URL.createObjectURL(uploadFile));
        $(".upload-img-frame")
          .attr("src", URL.createObjectURL(uploadFile))
          .addClass("success");
        filename = uploadFile.name;
        $(this).siblings(".upload-name").val(filename);
      }
    }
  });
});
function validateSignupForm() {
  const memberNick = $(".member-nick").val();
  const memberPhone = $(".member-phone").val();
  const memberPassword = $(".member-password").val();
  const confirmPassword = $(".confirm-password").val();

  if (
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPassword === ""
  ) {
    alert("Please insert all required inputs");
    return false;
  }

  if (memberPassword !== confirmPassword) {
    alert("Password differs, Please check");
    return false;
  }

  const memberImageInput = $(".member-image").get(0);
  const memberImage = memberImageInput?.files?.[0];
  if (!memberImage) {
    alert("Please insert restaurant image");
    return false; // backendga request qilmasligi uchun false
  }
  // Image Preloading
  return true;
}
