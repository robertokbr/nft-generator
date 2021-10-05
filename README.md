# 🖼 TypesCript NFT generator 
- My simple application made with TypeScript to generate randomic and unique png arts. 🎭
- Comming soon the function to mint all nft inside the OpenSea 🚧 

### 🏃‍♀️ Ho  to run
- Install NodeJS
- Install dependencies
```bash
  npm install
```
- Add the pieces of your art inside the path ```assets/layers/```, to each piece add a folder and the files of the piece inside the folder 
  - The folders inside this path is the pieces that I'm using with my arts, fell free to remove those.
- Fill the object ```layers``` inside the file ```main.ts``` with the name of the pieces that you have added inside the layers folder
  - Fill the pieces name exactly how you named the folder, and in the order that you want your art to be builded
- Run the script bellow to start generating your arts
```bash
  npm run dev
```
- See your pretty art inside the build folder 🌹
### 🦆 How to convert the code to JavaScript
- Run the script bellow to convert the code
```bash
  npm run build
```
- Run the script bellow to run the javaScript code
```bash
  npm run start
```
<img src="https://github.com/robertokbr/nft-generator/blob/main/.Github/run.gif" width="100%"/>
- Obs: the error of the gif is fixed. ( I forgot to to add a condition to avoid loading the .gitignore 🤷‍♂️ )
### That's all folks, don't forget to leave your star 🌟
