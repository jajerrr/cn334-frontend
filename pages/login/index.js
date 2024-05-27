export default function Login() {
    async function onLogin(event){
        event.preventDefault();
        const formData = new FormData(event.target)
        const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData,
 });
    // Handle response if necessary
    const data = await response.json()
    alert(JSON.stringify(data));
    }
    return (
    <main
        className='flex min-h-screen flex-col items-center justify-between'>
        <div style={{fontSize:"64px"}}
            className="w-full flex flex-col justify-center items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
            <div>CN334 Login form</div>
            <form onSubmit={onLogin} className="flex flex-col gap-1 text-3xl">
                <div><label>E-mail : </label> <input name="email" className="p-1 rounded-lg text-black" type="email" placeholder="cn334@tu.ac.th" /></div>
                <div><label>Password : </label> <input name="password" className="p-1 rounded-lg text-black" type="password" placeholder="password"/></div>
                <button className="p-2 bg-green-400 rounded-xl my-2" type="submit">Login</button>
            </form>
        </div>
    </main>);
}