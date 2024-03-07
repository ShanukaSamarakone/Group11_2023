function openPopup(imageUrl) {
  var width = 1050;
  var height = 650;
  var left = (screen.width / 2) - (width / 2);
  var top = (screen.height / 2) - (height / 2);
  window.open(imageUrl, '_blank', 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top);
}