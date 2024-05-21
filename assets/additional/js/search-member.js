const MEMBER_PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

var createStartupTag = function (startupId) {
  if (!startupId) return "";

  const startup = startups.find((s) => s.id == startupId);

  if (!startup) return "";

  return `
    <li>
      <a href="/startups/${startupId}" class="fr-tag" target="_self">${startup.title || startupId}</a>
    </li>`;
};

function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}

var createAuthorCard = function (author) {
  var card = document.createElement("tr");
  card.id = author.id;
  var totalStartups = [];
  if (author.startups) {
    totalStartups = totalStartups.concat(author.startups);
  }
  if (author.previously) {
    totalStartups = totalStartups.concat(author.previously);
  }
  totalStartups = totalStartups.slice(0, 10);

  let timestampNow = new Date();
  let authorEndDate;
  if (author.missions.length) {
    authorEndDate = new Date(author.missions[author.missions.length - 1].end);
  }

  var avatarSrc = staticFiles.filter((staticFile) => staticFile.includes(author.id))[0];
  if (!avatarSrc) {
    if (author.avatar) {
      avatarSrc = author.avatar;
    } else if (author.github) {
      avatarSrc = `https://avatars3.githubusercontent.com/${author.github}?s=600`;
    } else {
      avatarSrc = "/img/logo-generique-startup-carre-2019.jpg";
    }
  }
  const incubator = author.incubator ? incubators.find((incubator) => incubator.id === author.incubator) : undefined;
  const isAlumnus = authorEndDate < timestampNow;

  const avatar = `<img class="lozad avatar-rounded" src="${MEMBER_PLACEHOLDER}" data-src="${avatarSrc}" alt="">`;

  const title = author.link ? `<a class="fr-card__link" href="${author.link}" target="_blank" rel="noopener">${author.fullname}</a>` : author.fullname;
  const detail = isAlumnus ? "Alumnus" : author.role;
  const content = author.content || "";
  const tags = totalStartups.map(createStartupTag).join("");
  const other =
    !isAlumnus && incubator
      ? `<a href="/startups/?incubateur=${author.incubator}" class="fr-link" target="_self">
           RACE: ${incubator.title}
         </a>`
      : "";

  card.innerHTML = markupForCard({ title, detail, content, tags, detail, avatar });

  return card;
};

function markupForCard(params) {
  const { title, detail, content, tags, other, avatar } = params;

  return `
<tr>
  <td>${title}</td>
  <td>${detail}</td>
  <td>
    ${tags ? '<ul class="fr-tags-group">' + tags + "</ul>" : ""}
    ${!!other ? '<p class="fr-card__detail">' + other + "</p>" : ""}
  </td>
</tr>`;
}

var generateDataWithHtmlCards = function (members) {
  var keys = Object.keys(members);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    for (var j = 0; j < members[key].length; j++) {
      members[key][j]["html"] = createAuthorCard(members[key][j]);
    }
  }
  return members;
};

var createIncubatorSelect = function (members, incubators, initValue) {
  var selectIncubator = document.getElementById("select-incubateur");
  var optionFragment = document.createDocumentFragment();
  for (var i = 0; i < incubators.length; i++) {
    var incubator = incubators[i];
    var option = document.createElement("option");
    option.innerText = incubator.title;
    option.value = incubator.id;
    optionFragment.appendChild(option);
  }
  selectIncubator.appendChild(optionFragment);
  var intersection = function (array1, array2) {
    return Boolean(
      array1.filter(function (n) {
        return array2.indexOf(n) !== -1;
      }).length
    );
  };
  var onIncubatorChange = function (value) {
    var selectedStartups = (value ? startups.filter((d) => d.incubator_id === value) : startups).map((s) => s.id);
    var currentsToDisplay = members.filter((member) => intersection(member.startups, selectedStartups) || member.incubator === value);
    currentsToDisplay = currentsToDisplay.map((d) => ({
      ...d,
      html: createAuthorCard(d),
    }));
    // var alumnisToDisplay = alumnis.filter((alumni) => intersection(alumni.startups, selectedStartups) || alumni.incubator === value);
    // alumnisToDisplay = alumnisToDisplay.map((d) => ({
    //   ...d,
    //   html: createAuthorCard(d),
    // }));

    var documentFragmentCurrents = document.createDocumentFragment();
    for (var j = 0; j < currentsToDisplay.length; j++) {
      documentFragmentCurrents.appendChild(currentsToDisplay[j].html);
    }
    var gridCurrents = document.getElementsByClassName("authors")[0];
    gridCurrents.innerHTML = "";
    gridCurrents.appendChild(documentFragmentCurrents);
    var countCurrentsElement = document.getElementById("currents-count");
    countCurrentsElement.innerHTML = currentsToDisplay.length;

    // var documentFragmentAlumnis = document.createDocumentFragment();
    // for (var j = 0; j < alumnisToDisplay.length; j++) {
    //   documentFragmentAlumnis.appendChild(alumnisToDisplay[j].html);
    // }
    // var gridAlumnis = document.getElementsByClassName("alumnis")[0];
    // gridAlumnis.innerHTML = "";
    // gridAlumnis.appendChild(documentFragmentAlumnis);
    // var countAlumnisElement = document.getElementById("alumnis-count");
    // countAlumnisElement.innerHTML = alumnisToDisplay.length;

    if (window.lozad) {
      const observer = lozad();
      observer.observe();
    }
  };
  if (initValue) {
    selectIncubator.value = initValue;
    onIncubatorChange(initValue);
  }
  selectIncubator.addEventListener("change", function (e) {
    var value = e.target.value;
    onIncubatorChange(value);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("incubateur", value);
    history.replaceState(null, null, window.location.origin + window.location.pathname + "?" + urlParams);
  });
};
