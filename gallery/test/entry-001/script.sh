sed -i 's/”/\&rdquo;/g' index.html;sed -i 's/“/\&ldquo;/g' index.html;
sed -i 's/“/\&mdash;/g' index.html


find . -type f -exec sed -i.bak "s/foo/bar/g" {} \;

find . -type f -name "*.html" -exec sed -i 's/”/\&rdquo;/g' {} \;
find . -type f -name "*.html" -exec sed -i 's/“/\&ldquo;/g' {} \;
find . -type f -name "*.html" -exec sed -i "s/’/'/g" {} \;
find . -type f -name "*.html" -exec sed -i "s/–/\&mdash;/g" {} \;