import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { userInfo } from '../../data/data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = userInfo.find((user) => user.username === username && user.password === password);
    
        if (user) {
            localStorage.setItem('user', JSON.stringify(user)); // Armazena o usuário na localStorage
            console.log('Login bem-sucedido');
            toast.success('Login bem-sucedido!');
            navigate('/');
        } else {
            console.log('Credenciais inválidas');
            toast.error('Credenciais inválidas');
        }
    };
    

        return (
            <section className="md:bg-[#393939] bg-[#232323] text-white min-h-screen flex justify-center items-center">
                <div className="w-full lg:w-2/3 h-[600px] flex flex-row md:rounded-[15px] md:shadow-md">
                    <div className="md:w-1/2 w-full bg-[#232323] md:rounded-l-[15px] flex flex-col justify-center items-center">
                        <div className="flex justify-center mb-5">
                            <h1 className="text-2xl font-bold">Welcome back.</h1>
                        </div>
                        <div className="flex gap-2 justify-start w-3/4">
                            <span>Don't have an account?</span>
                            <a href="" className="text-[#791AF1]">Sign up</a>
                        </div>
                        <div className="w-3/4  text-white my-12">
                            <form action="" className="flex flex-col gap-4">
                                <input type="text" className="w-full bg-[#353535] h-[36px] rounded-md p-5" placeholder="Your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input type="password" className="w-full bg-[#353535] h-[36px] rounded-md p-5" placeholder="Your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="flex flex-col gap-2 md:flex-row justify-between">
                                    <div className="flex gap-2">
                                        <input type="checkbox" name="kplogin" id="kplogin" />
                                        <span>Keep me logged in</span>
                                    </div>
                                    <div>
                                        <a href="" className='text-[#791AF1]'>Forgot Password?</a>
                                    </div>
                                </div>
                                <button onClick={handleLogin} className="bg-gradient-to-r from-[#791AF1] to-[#5E0ACA] w-full h-[55px] rounded-md text-xl">Sign in</button>
                            </form>
                        </div>
                    </div>
                    <div className="w-1/2 h-full bg-[#2F2F2F] rounded-r-[15px] justify-start items-center relative hidden md:flex">
                        <div className="h-[85%] w-3/4 bg-[#791AF1] rounded-tr-[25px] justify-start relative shadow-md">
                            <div className="flex justify-between items-center px-6 py-2 text-xl mt-4">
                                <p className="text-white font-normal">100.000+ users getting fun</p>
                                <h1 className="font-bold text-2xl">Logo</h1>
                            </div>
                            <div className="h-5/6 w-5/6 bg-white absolute bottom-0 rounded-tr-[25px]">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
