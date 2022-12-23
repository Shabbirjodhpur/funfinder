function makeCard(location,days,persons,title,review,reviewPerson,price){
var card = 
`
<div class="cellL" style="padding: 16px;">
            <div class="package-item bg-white mb-2" style="width: 70vw;max-width: 320px;">
              <img class="img-fluid" src="img/package-1.jpg" alt="">
              <div class="p-4">
                <div class="d-flex flex-column flex-lg-row flex-sm-row flex-md-row flex-xs-row justify-content-between mb-3">
                  <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>${location}</small>
                  <small class="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>${days}</small>
                  <small class="m-0"><i class="fa fa-user text-primary mr-2"></i>${persons}</small>
                </div>
                <a class="h5 text-decoration-none" href="">${title}</a>
                <div class="border-top mt-4 pt-4">
                  <div class="d-flex justify-content-between">
                    <h6 class="m-0">
                      <i class="fa fa-star text-primary mr-2"></i>${review}
                      <small>(${reviewPerson})</small>
                    </h6>
                    <h5 class="m-0">${price}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
`
return card;
}

//var cardWrapper = document.createElement('div');
//cardWrapper.innerHTML = makeCard("Hyderabad","2 days","3 persons","Mystery Rooms","4.5","250","Rs.1000");
//document.getElementsByTagName('body')[0].appendChild(cardWrapper);