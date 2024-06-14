import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import shaker from "/images/shaker.jpg";
import jigger from "/images/jigger.jpg";
import mixing from "/images/mixing.jpg";
import barSpoon from "/images/spoon.jpg";
import strainer from "/images/strainer.jpg";
import muddler from "/images/muddler.webp";
import juicer from "/images/juicer.jpg";
import peeler from "/images/peeler.jpg";

function CocktailUtensils() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", px: 2, marginTop: "20px" }}>
      <Typography variant="h5" sx={{ mb: 2, color: "orange" }}>
        The Importance of Tools in Cocktails: Essential Utensils and Their Uses
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Crafting the perfect cocktail is an art that goes beyond just mixing
        ingredients. The right tools can elevate the process, ensuring
        precision, enhancing flavors, and improving presentation. Whether you're
        an aspiring mixologist or an enthusiastic home bartender, understanding
        and using the proper utensils is crucial for creating excellent
        cocktails. Let's delve into the essential tools of the trade and how
        they are used.
      </Typography>
      <Box
        component="img"
        src={shaker}
        alt="Cocktail Shaker"
        sx={{ width: "70%", height: "auto", mb: 2 }}
      />
      <Typography variant="h5" sx={{ mt: 2, mb: 1, color: "orange" }}>
        Cocktail Shaker
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        A cocktail shaker is fundamental for mixing and chilling cocktails.
        There are two main types: the Boston shaker and the Cobbler shaker.
      </Typography>
      <ul>
        <li>
          <b>Boston Shaker:</b>
          Consists of two parts, a mixing glass and a metal tin. It requires a
          separate strainer.
        </li>
        <li>
          <b>Cobbler Shaker:</b>Comes with three parts, including a built-in
          strainer and a cap. It is user-friendly for beginners.
        </li>
      </ul>
      <Box
        component="img"
        src={jigger}
        alt="Cocktail Jigger"
        sx={{ width: "70%", height: "auto", mb: 2 }}
      />
      <Typography variant="h5" sx={{ mt: 2, mb: 1, color: "orange" }}>
        Jigger
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        A jigger is a measuring tool used to ensure precise proportions of
        ingredients. It typically has two different-sized cups on each end,
        commonly measuring 1.5 ounces and 0.75 ounces.
      </Typography>
      <ul>
        <li>
          <b>Usage:</b>
          Use the jigger to measure spirits and mixers, ensuring the balance and
          consistency of your cocktails.
        </li>
      </ul>
      <Box
        component="img"
        src={mixing}
        alt="Mixing Glass"
        sx={{ width: "70%", height: "auto", mb: 2 }}
      />
      <Typography variant="h5" sx={{ mt: 2, mb: 1, color: "orange" }}>
        Mixing Glass
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        A mixing glass is used for stirring cocktails, especially those that
        should not be shaken, such as the Manhattan or Martini.
      </Typography>
      <ul>
        <li>
          <b>Usage:</b>
          Combine ingredients in the glass with ice and stir gently with a bar
          spoon to chill and dilute the drink.
        </li>
      </ul>
      <Box
        component="img"
        src={barSpoon}
        alt="Bar Spoon"
        sx={{ width: "70%", height: "auto", mb: 2 }}
      />
      <Typography variant="h5" sx={{ mt: 2, mb: 1, color: "orange" }}>
        Bar Spoon
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        A bar spoon is essential for stirring cocktails. It usually has a long,
        twisted handle to facilitate smooth stirring and layering of drinks.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <ul>
          <li>
            <b>Usage:</b>
            Use the bar spoon to mix ingredients in a mixing glass or directly
            in the serving glass. The twisted handle allows for controlled
            stirring and layering.
          </li>
        </ul>
      </Typography>
      <Box
        component="img"
        src={strainer}
        alt="Cocktail strainer"
        sx={{ width: "70%", height: "auto", mb: 2 }}
      />

      <Typography variant="h5" sx={{ mt: 2, mb: 1, color: "orange" }}>
        Strainer
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        A bar spoon is essential for stirring cocktails. It usually has a long,
        twisted handle to facilitate smooth stirring and layering of drinks.
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <b>Hawthorne Strainer: </b>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Features a metal coil and fits snugly over the top of a shaker or
            mixing glass.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <b>Julep Strainer: </b>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Has a perforated bowl and is typically used with mixing glasses.
          </Typography>
        </li>
      </ul>
      <Box
        component="img"
        src={muddler}
        alt="Cocktail muddler"
        sx={{ width: "70%", height: "auto", mb: 2 }}
      />
      <Typography variant="h5" sx={{ mt: 2, mb: 1, color: "orange" }}>
        Muddler
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        A muddler is a tool used to crush or muddle ingredients, such as fruits,
        herbs, and sugar, to release their flavors.
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <b>Usage: </b>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Use the muddler to gently press ingredients against the bottom of a
            glass to extract oils and juices, essential for cocktails like the
            Mojito or Old Fashioned.
          </Typography>
        </li>
      </ul>
      <Box
        component="img"
        src={juicer}
        alt="Cocktail juicer"
        sx={{ width: "70%", height: "auto", mb: 2 }}
      />

      <Typography variant="h5" sx={{ mt: 2, mb: 1, color: "orange" }}>
        Citrus Juicer
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Freshly squeezed juice can significantly enhance the flavor of
        cocktails. A citrus juicer ensures you get the most juice from your
        lemons, limes, and oranges.
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <b>Usage: </b>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Cut the fruit in half, place it in the juicer, and press to extract
            the juice, which is then added to your cocktail.
          </Typography>
        </li>
      </ul>
      <Box
        component="img"
        src={peeler}
        alt="Cocktail Peeler"
        sx={{ width: "70%", height: "auto", mb: 2 }}
      />

      <Typography variant="h5" sx={{ mt: 2, mb: 1, color: "orange" }}>
        Peeler
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        A peeler is used to create citrus twists or peels, which are often used
        as garnishes in cocktails.
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <b>Usage: </b>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Use the peeler to remove thin strips of zest from citrus fruits.
            Twist the peel over the drink to release essential oils, enhancing
            the aroma and presentation of the cocktail.
          </Typography>
        </li>
      </ul>
    </Box>
  );
}

export default CocktailUtensils;
