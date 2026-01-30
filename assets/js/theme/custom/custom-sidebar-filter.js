const customSidebar = () => {
  const title = {
    // Include Automatic Taper?
    // YT: "Taper Included",
    // NT: "No Taper",

    // // Flat Box Set Sizes:
    // 710: `7"/10" Boxes`,
    // 1012: `10"/12" Boxes`,
    // 71012: `7"/10"/12" Boxes`,

    // // Flat Box Capacities:
    // SF: `Standard`,
    // MF: `MEGA`,

    // // Corner Applicator Type:
    // MA: "MiniShot™",
    // "7A": '7" Corner Box',
    // "8A": '8" Corner Box',

    // // # of Corner Finishers:
    // "03": `3" Corner Finisher`,
    // "0335": `3"/3.5" Corner Finishers`,

    // // # of Compound Pumps:
    // "1P": "1 Pump",
    // "2P": "2 Pumps",

    // // Nail Spotter Included?
    // YN: "Nail Spotter",
    // NN: "No Nail Spotter",

    // // Handle Type:
    // FH: "FL Handles",
    // EH: "Ext Handles",
  };
  // $('.form-select').select2();

  $(".tag--block").each(function(){
    title[$(this).find("input").val()] = $(this).find("span").attr("top-title");
  });

  window.onresize = (resize) =>{
    if(window.innerWidth > 1024){
      $(".filter-list_container[pc]").css("display", "flex");
      $(".filter-list_container[mobile]").css("display", "none");
    }else{
      $(".filter-list_container[mobile]").css("display", "flex");
      $(".filter-list_container[pc]").css("display", "none");
    }
  }
  // console.log(title);

  $("#filter-button-mobile").on("click", function () {
    $(".custom-model-main").addClass("model-open");
  });
  $(".close-btn, .bg-overlay").click(function () {
    $(".custom-model-main").removeClass("model-open");
  });

  $(".filter--show_button").each(function () {
    $(this).click(function () {
      const block = $(`[filter-block="${$(this).attr("filter-button")}"]`);
      // if (block.css("display") === "none") {
      //   block.css("display", "grid");
      // } else {
      //   block.css("display", "none");
      // }
      if(block.hasClass("show")){
        block.removeClass("show");
      }else{
        block.addClass("show");
      }
      // console.log("clicked");
    });
  });

  $(".tag_title--block").click(function () {
    const input = $(this).siblings().find("input");
    if (input.is(":checked")) {
      input.prop("checked", false);
    } else {
      input.prop("checked", true);
    }
    fillFilterList();
  });

  $("[input-filter]").on("change", fillFilterList);
  $(".filter-wrapper[sort-block]").on("mousedown", function(evt){
    
  });

  function clearFilterAtTop(val) {
    $(`[input-filter][value="${val}"]`).prop("checked", false);
    fillFilterList();
  }

  function fillFilterList() {
    const temp = [];
    $(".filter-list_container").empty();
    if ($("[input-filter]:checked").length > 0) {
      if(window.innerWidth > 1024){
        $(".filter-list_container[pc]").css("display", "flex");
        $(".filter-list_container[mobile]").css("display", "none");
      }else{
        $(".filter-list_container[mobile]").css("display", "flex");
        $(".filter-list_container[pc]").css("display", "none");
      }
      
      $("#isotope-container").css("margin-top", "10px");
      $(".filter-list_container").append(`
      <li class="filter-list clear-all" data="clear-all-filter">
          <div>
            <u>Clear All</u>
          </div>
        </li>`);
      $(`[data="clear-all-filter"]`).on("click", function () {
        $("[input-filter]:checked").each(function () {
          $(this).prop("checked", false);
        });
        fillFilterList();
      });
    }else{
      
      $(".filter-list_container").css("display", "none");
      $("#isotope-container").css("margin-top", "0px");
    }

    $("[input-filter]:checked").each(function () {
      const val = $(this).val();
      temp.push(val);
      $(".filter-list_container").append(
        `<li class="filter-list" data="${val}"">
      <div>
      ${title[val]}
      <div>x</div>
      </div></li>`
      );
      setTimeout(function () {
        $(`.filter-list[data="${val}"]`).click(function () {
          clearFilterAtTop(val);
        });
      }, 0);
    });
    const createEvent = new Event("CheckboxUpdated", {});
    window.dispatchEvent(createEvent);
  }

};

const checkFilterFromCustomField = () => {
  
  let filterData = [];

  $("#isotope-container .product").each(function(){
    filterData = filterData.concat($(this).attr("filter-data").split(" "));
    
  });
  filterData = filterData.filter((value, index, self) => self.indexOf(value) === index && value.length > 0);
  console.log(filterData);
  $(".filter--container .filter--box").each(function(){
    let notExist = true;
    $(this).find("input").each(function(){
      if(filterData.includes($(this).val())){
        notExist = false;
        // break;
      }
    });
    if(notExist){
      $(this).hide();
    }



  })

};

export { customSidebar, checkFilterFromCustomField };
