# How to Edit the Lessons Plans Page

## How to add/remove a lesson plan to the lesson plans page

You'll see a comment block like this that indicates the subject name. This is to make sure you are in the right section. For the `SOCIAL STUDIES SECTION` and the `LANGUAGE ARTS SECTION`, you may have to scroll down for a bit to see the next section. Here is an example:

```
<!-- LANGUAGE ARTS SECTION -->
```

Once you found your selected section, to add a lesson plan go to the very end of the each subject section until you see an HTML comment that looks like this: `<!-- More lessons -->`. Do not delete this. Above this comment add this code block template:

```
<div class="box" data-subject="[subject]" data-grade="[grade number]">
  <img class="cover" src="images/lessonplan-cards-all/[cover-image-name]" alt="[alt text]">
  <div>
    <a target="_blank" href="[link to the lesson plans page]">
      <h3>[name of the lesson plan]</h3>
    </a>
  </div>
</div>
```

To remove a lesson plan, simply remove this code block.


## How to edit the grade and subject for a lesson plan

To change or add a grade on a lesson plan change the `data-grade` attribute in the code block.

```
<div class="box" data-subject="art" data-grade="9">
  ... code within
</div>
```

To add more than one grade write all the grades with a space inbetween, like this:

```
<div class="box" data-subject="art" data-grade="9 10 11 12">
  ... code within
</div>
```

The example above shows that this particular lessons plan is suitable for grades 9-12th, so you'll write out all the grades from 9 to 12.

To add/change the subject, change the `data-subject` attribute in the code block. Make sure you are in the right subject section if you are changing the subject. Here is an example if you were adding a new lesson plan to the art section:

```
<div class="box" data-subject="art" data-grade="9 10 11 12">
  ... code within
</div>
```

## Adding card images

To add the card images to the lessons plans, make sure to add all card images in the lessonplan-cards-all folder inside the images folder.

Then in the code block, edit the image path. Here is an example:

```
<div class="box" data-subject="math-science" data-grade="7">
  <img class="cover" src="images/lessonplan-cards-all/plantstexas.png" alt="plants in central texas cover image"> 
  ... code within
</div>
```

The alt text can be whatever to describe the image, I usually write the name of the lesson plan + cover image as the alt text.

