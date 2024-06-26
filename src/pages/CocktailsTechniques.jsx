import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

function CocktailsTechniques() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", px: 2, marginTop: "20px" }}>
      <Typography variant="h5" sx={{ mb: 2, color: "orange" }}>
        The Importance of Techniques in Cocktails: From Basic to Advanced
      </Typography>
      <p>
        Mastering cocktail techniques is essential for any aspiring mixologist.
        These techniques ensure that each drink is crafted with precision,
        enhancing the flavors and presentation. Here’s a detailed guide,
        categorized by difficulty level, to help you perfect your
        cocktail-making skills.
      </p>
      <Typography variant="h4" sx={{ mb: 2, color: "orange" }}>
        Basic Techniques
      </Typography>
      <Typography variant="h5" sx={{ mb: 2, color: "orange" }}>
        Stirring
      </Typography>
      <p>
        Stirring is used for cocktails that contain only spirits, such as the
        Martini or Manhattan. The aim is to chill and dilute the drink without
        adding air.
      </p>
      <ul>
        <li>
          <b>Method:</b>Combine ingredients in a mixing glass with ice. Stir
          gently with a bar spoon for about 30 seconds.
        </li>
        <li>
          <b>Tools:</b>Mixing glass, bar spoon
        </li>
      </ul>
      <Typography variant="h5" sx={{ mb: 2, color: "orange" }}>
        Shaking
      </Typography>
      <p>
        Shaking is used for cocktails that include juices, syrups, or other
        non-alcoholic mixers, such as the Margarita or Daiquiri. It ensures a
        thorough mix and proper dilution.
      </p>
      <ul>
        <li>
          <b>Method:</b>Add ingredients to a shaker with ice. Shake vigorously
          for about 15 seconds.
        </li>
        <li>
          <b>Tools:</b>Boston shaker or Cobbler shaker.
        </li>
      </ul>
      <Typography variant="h5" sx={{ mb: 2, color: "orange" }}>
        Muddling
      </Typography>
      <p>
        Muddling is used to extract flavors from fresh ingredients like herbs,
        fruits, and sugar, often for cocktails like the Mojito or Old Fashioned.
      </p>
      <ul>
        <li>
          <b>Method:</b>Place the ingredients in a glass. Press and twist gently
          with a muddler to release flavors.
        </li>
        <li>
          <b>Tools:</b>Muddler, mixing glass or shaker.
        </li>
      </ul>
      <Typography variant="h4" sx={{ mb: 2, color: "orange" }}>
        Intermediate Techniques
      </Typography>
      <Typography variant="h5" sx={{ mb: 2, color: "orange" }}>
        Straining
      </Typography>
      <p>
        Straining is used to remove ice and solid ingredients from a cocktail
        after shaking or stirring, ensuring a smooth drink.
      </p>
      <ul>
        <li>
          <b>Method:</b>Use a Hawthorne strainer over the shaker or a Julep
          strainer over the mixing glass to pour the liquid into the serving
          glass.
        </li>
        <li>
          <b>Tools:</b>Hawthorne strainer, Julep strainer.
        </li>
      </ul>
      <Typography variant="h5" sx={{ mb: 2, color: "orange" }}>
        Layering
      </Typography>
      <p>
        Layering is used to create visually appealing, multi-layered drinks by
        carefully pouring different density liquids to sit on top of each other.
      </p>
      <ul>
        <li>
          <b>Method:</b>Pour the heaviest ingredient first, then slowly add the
          lighter ingredients over the back of a bar spoon.
        </li>
        <li>
          <b>Tools:</b>Bar spoon.
        </li>
      </ul>
      <Typography variant="h5" sx={{ mb: 2, color: "orange" }}>
        Flaming
      </Typography>
      <p>
        Flaming is a technique where alcohol is set on fire, either for dramatic
        effect or to caramelize sugars, enhancing the flavor of the drink.
      </p>
      <ul>
        <li>
          <b>Method:</b>Light the alcohol on fire carefully. Blow it out before
          drinking or serving.
        </li>
        <li>
          <b>Tools:</b>Long lighter, fire-safe glassware.
        </li>
      </ul>
      <Typography variant="h4" sx={{ mb: 2, color: "orange" }}>
        Advanced Techniques
      </Typography>
      <Typography variant="h5" sx={{ mb: 2, color: "orange" }}>
        Infusing
      </Typography>
      <p>
        Infusing involves steeping ingredients in alcohol over a period of time
        to impart new flavors. This technique can create unique bases for
        cocktails.
      </p>
      <ul>
        <li>
          <b>Method:</b>Add herbs, fruits, or spices to a jar of alcohol. Let it
          sit for several hours to weeks, depending on the desired flavor
          intensity.
        </li>
        <li>
          <b>Tools:</b>Mason jars, cheesecloth or fine strainer.
        </li>
      </ul>
      <Typography variant="h5" sx={{ mb: 2, color: "orange" }}>
        Carbonating
      </Typography>
      <p>
        Carbonating adds effervescence to cocktails using a CO2 charger or soda
        siphon. This technique creates fizzy drinks with a unique mouthfeel.
      </p>
      <ul>
        <li>
          <b>Method:</b>Add the cocktail mixture to a soda siphon. Charge with a
          CO2 cartridge and shake.
        </li>
        <li>
          <b>Tools:</b>Soda siphon, CO2 cartridges.
        </li>
      </ul>
    </Box>
  );
}

export default CocktailsTechniques;
