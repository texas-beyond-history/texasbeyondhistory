# How to Edit the Lessons Plans Page

## How to add/remove a lesson plan to the lesson plans page

You will see a comment block like this, which indicates the subject name, to ensure you are in the correct section. For the `SOCIAL STUDIES SECTION` and the `LANGUAGE ARTS SECTION`, you may need to scroll down a bit to view the next section. Here is an example:

```
<!-- LANGUAGE ARTS SECTION -->
```

Once you have located your selected section, to add a lesson plan, navigate to the very end of each subject section until you come across an HTML comment that appears like this: `<!-- More lessons -->`. Do not delete this. Above this comment, insert the following code block template:

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

To remove a lesson plan, simply remove the code block.


## How to edit the grade and subject attributes for each lesson plan

To change or add a grade on a lesson plan change the `data-grade` attribute in the code block.

```
<div class="box" data-subject="art" data-grade="9">
  ... code within
</div>
```

To add more than one grade write out all the grades in a list with a space inbetween, like this:

```
<div class="box" data-subject="art" data-grade="9 10 11 12">
  ... code within
</div>
```

The example above illustrates that this specific lesson plan is appropriate for grades 9-12. Therefore, you will list out all the grades from 9 to 12.

To modify or add a subject, alter the `data-subject` attribute in the code block. Make sure you are in the correct subject section when making the change. Here is an example of adding a new lesson plan to the art section:

```
<div class="box" data-subject="art" data-grade="9 10 11 12">
  ... code within
</div>
```

## Adding card images

To add a card image to a lessons plan, make sure to add all card images in the **lessonplan-cards-all** folder inside the images folder.

Then in the code block, edit the image source attribute in the `<img>` tag. Here is an example:

```
<div class="box" data-subject="math-science" data-grade="7">
  <img class="cover" src="images/lessonplan-cards-all/plantstexas.png" alt="plants in central texas cover image"> 
  ... code within
</div>
```

The alt text can be whatever to describe the image. I usually write: `[the name of the lesson plan + cover image]` as the alt text.

