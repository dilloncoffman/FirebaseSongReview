const initState = {
  reviews: [
    {
      id: "1",
      songName: "Crying Lightning",
      artistName: "Arctic Monkeys",
      youtubeLinkToSong: "https://www.youtube.com/watch?v=fLsBJPlGIDU",
      reviewContent:
        "Doggo ipsum you are doing me the shock smol borking doggo with a long snoot for pats extremely cuuuuuute very jealous pupper much ruin diet many pats big ol pupper, ruff thicc shoob blop wrinkler. Boofers heck heckin angery woofer, much ruin diet. The neighborhood pupper you are doing me a frighten heck floofs long water shoob dat tungg tho snoot super chub, heckin big ol pupper very taste wow noodle horse blop puggo. Wow very biscit extremely cuuuuuute pupperino snoot mlem puggo long doggo, porgo fluffer waggy wags super chub. Wow very biscit borkf tungg doggo, doggorino pupper."
    },
    {
      id: "2",
      songName: "Cops and Robbers",
      artistName: "Shakey Graves",
      youtubeLinkToSong: "https://www.youtube.com/watch?v=bIWoVwfJVkI",
      reviewContent:
        "Doggo ipsum you are doing me the shock smol borking doggo with a long snoot for pats extremely cuuuuuute very jealous pupper much ruin diet many pats big ol pupper, ruff thicc shoob blop wrinkler. Boofers heck heckin angery woofer, much ruin diet. The neighborhood pupper you are doing me a frighten heck floofs long water shoob dat tungg tho snoot super chub, heckin big ol pupper very taste wow noodle horse blop puggo. Wow very biscit extremely cuuuuuute pupperino snoot mlem puggo long doggo, porgo fluffer waggy wags super chub. Wow very biscit borkf tungg doggo, doggorino pupper."
    },
    {
      id: "3",
      songName: "Someday",
      artistName: "Julia Jacklin",
      youtubeLinkToSong: "https://www.youtube.com/watch?v=Hl9FV9thfRE",
      reviewContent:
        "Doggo ipsum you are doing me the shock smol borking doggo with a long snoot for pats extremely cuuuuuute very jealous pupper much ruin diet many pats big ol pupper, ruff thicc shoob blop wrinkler. Boofers heck heckin angery woofer, much ruin diet. The neighborhood pupper you are doing me a frighten heck floofs long water shoob dat tungg tho snoot super chub, heckin big ol pupper very taste wow noodle horse blop puggo. Wow very biscit extremely cuuuuuute pupperino snoot mlem puggo long doggo, porgo fluffer waggy wags super chub. Wow very biscit borkf tungg doggo, doggorino pupper."
    }
  ]
};

const reviewReducer = (state = initState, action) => {
  // check action type
  switch (action.type) {
    case "CREATE_SONG_REVIEW":
      console.log("Created song review", action.review);
      break;
    default:
      console.log("Hit default case");
  }
  return state;
};

export default reviewReducer;
