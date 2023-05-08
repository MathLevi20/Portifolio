import React from "react";

const Resume = "https://jjbxdcfzgsgvpnluftzo.supabase.co/storage/v1/object/sign/portifolio/PDF/Matheus%20Levi.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0aWZvbGlvL1BERi9NYXRoZXVzIExldmkucGRmIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjczNjQzMDE3LCJleHAiOjE5ODkwMDMwMTd9.LMJO5UncnI1OEqMLiqkCVqVsSf4TSwgYx6PnxCyInPY";

export default function Navbar() {
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3  bg-slate-500 mb-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-auto static block justify-start">
						<a
							className="text-sm font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white"
							href="#pablo"
						><img width={100} src="https://jjbxdcfzgsgvpnluftzo.supabase.co/storage/v1/object/sign/portifolio/Imagens/logo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0aWZvbGlvL0ltYWdlbnMvbG9nbyIsImlhdCI6MTY3NDM2Mjc4MSwiZXhwIjo5LjdlKzI5fQ.Wb6qYqz6Viovy81uLl2XWvlJFoKe53mFx0Ysvk81FYQ&t=2023-01-22T04%3A46%3A21.425Z"/>
						</a>
					</div>
					<div
						className={
							"flex flex-grow items-center "
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-row list-none ml-auto">
	

							<li className="nav-item">
								<a
									className="px-5 py-2 rounded-md flex items-center text-xs uppercase bg-gray-700 font-bold leading-snug text-white hover:opacity-75"
									href = {Resume}>
									<i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" ></i><span className="">Resumo</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}