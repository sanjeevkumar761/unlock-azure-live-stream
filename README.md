# unlock-azure-live-stream
Example of Ethereum Unlock protocol with Azure Media Services Live Stream. Allows to lock/unlock Azure Media Live Stream and build subscription models for it.  

# Always use Ethereum testnet e.g., Rinkeby for this demo. Never transfer actual Ethereum/ETH from mainnet for this demo.   
*You agree to the dislaimer mentioned at the bottom of this page, when you proceed further with the details and steps given below.*

# Pre-reqisites
1. Go to https://app.unlock-protocol.com/dashboard and create a lock (install Metamask or other wallet if you don't have already and add some test Ethers to your account by using Rinkeby testnet faucet https://faucet.rinkeby.io/ ). Always use Ethereum testnet e.g., Rinkeby for this demo. Never transfer actual Ethereum/ETH from mainnet for this demo.      
2. Replace lock id from Unlock protocol in public/index.html in script > unlockProtocolConfig > locks with your lock ID  
3. Create a livestream in Azure Media Services. See tutorial here https://docs.microsoft.com/en-us/azure/media-services/latest/live-event-obs-quickstart .       

# Install and Run
1. npm install
2. node index.js
3. Open browser and navigate to http://localhost:4000/
5. Click "Unlock" button and Select your authentication method as Wallet  
6. Confirm test transaction in your Metamask wallet (make sure you are on Rinkeby test not. You must NOT use Ethereum mainnet for this demo)  
7. Click on Back to Site button on Unlock protocol dialog box  
8. You can see Azure Media Services Luvestream page (and see the live stream if it is on). You can enter the URL of your own Azure Media Services Livestream here and watch it.  






## IMPORTANT DISCLAIMER     
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  

This source code is just an example and it does not represent any software or product or service from my employer Microsoft. It is not an official Microsoft artifact or product and it is not endorsed in any way by Microsoft. You should exercise your own judgement and prudence before using it. There is no one who is actively maintaining or supporting this project.  
