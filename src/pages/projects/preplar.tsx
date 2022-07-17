import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Tag } from "../../components/Tag";

export default function ProjectPage({ className }: { className: string }) {
    return (
        <div className={className}>
            <div className="relative w-full h-32">
                <Image
                    src="https://res.cloudinary.com/demo/image/fetch/https://preplar.tika.is/Preview.png"
                    layout="fill"
                    objectFit="scale-down"
                    alt="The Preplar app page"
                />
            </div>

            <div className="mt-16 flex flex-col gap-4">
                <h1 className="text-5xl font-bold">Preplar</h1>
                <div className="flex gap-1">
                    <Tag name="5 commits" />
                    <Tag name="Javascript" />
                </div>
            </div>

            <div className="mt-8">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi tristique, sapien eu pellentesque fermentum, ligula
                    enim placerat tellus, eu tempus velit purus non risus.
                    Curabitur nec scelerisque velit, eleifend fermentum justo.
                    Suspendisse pellentesque tempor vehicula. Maecenas a ante
                    non dui facilisis rhoncus quis sed leo. Maecenas efficitur
                    at nibh nec eleifend. Sed sed erat nec risus facilisis
                    malesuada id ac ante. Nunc vestibulum enim id ligula
                    eleifend iaculis. Nunc viverra eros orci, eu tristique odio
                    porta quis. Maecenas pretium sapien ultrices condimentum
                    dignissim. Morbi iaculis purus eu lorem tincidunt, et
                    placerat est ultrices. Curabitur dapibus sagittis iaculis.
                    Morbi sagittis porttitor ipsum, et fringilla velit sagittis
                    consequat. Maecenas at ullamcorper nibh, vitae imperdiet
                    orci. Nunc pharetra porttitor sem, id feugiat nulla posuere
                    vel. Maecenas venenatis ipsum enim, vitae lacinia dolor
                    sodales a. Duis ullamcorper faucibus egestas. Duis ut purus
                    purus. Cras vel eros dui. Donec quam justo, bibendum eu
                    purus sed, sagittis dapibus ex. Etiam molestie risus ac arcu
                    pellentesque convallis. <br />
                    <br /> Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Cras dictum est
                    eget ligula bibendum, in fermentum dui varius. Integer
                    elementum eleifend ligula eget interdum. Phasellus venenatis
                    odio nec volutpat viverra. Nam eget mi at nibh vestibulum
                    imperdiet. Sed vel arcu a nibh ullamcorper blandit.
                    Curabitur euismod feugiat eros, id rutrum est pellentesque
                    ut. Maecenas aliquet ligula et varius facilisis. Morbi nec
                    mauris ut ex ornare finibus quis ut nibh. Fusce mattis
                    lectus a libero accumsan, id dapibus nisi cursus. Mauris id
                    vehicula lorem. Duis purus orci, pulvinar et velit eget,
                    aliquam ornare eros. Vivamus at odio purus. Sed justo mi,
                    volutpat sit amet lorem pellentesque, vehicula elementum
                    lacus. Suspendisse laoreet imperdiet orci in tempor. Nullam
                    tempus blandit ligula a volutpat. Phasellus arcu enim,
                    posuere eu purus ac, vehicula ultrices sapien. Aenean eget
                    quam sit amet justo tempus vestibulum eu pulvinar mauris.
                    Sed et dolor quam. Nam finibus leo augue, vel dapibus lectus
                    vestibulum eu. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae; In hac habitasse
                    platea dictumst. Aliquam erat volutpat. Mauris tempor purus
                    non massa porttitor, eget egestas massa gravida. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Donec id consequat nunc.
                    Maecenas vel diam justo. Curabitur dui tellus, ornare at
                    consequat vel, fringilla eu nibh. Proin sagittis iaculis
                    eros id iaculis. Suspendisse rhoncus posuere diam ut dictum.
                    Ut rhoncus enim porta nunc sollicitudin, a eleifend sapien
                    gravida. Nam metus tortor, volutpat nec enim sit amet,
                    congue fringilla odio. Nunc dapibus dictum ipsum vitae
                    volutpat. Proin semper lectus quis nulla interdum, ut
                    sodales sem ultricies. Ut enim leo, finibus et turpis ut,
                    euismod ullamcorper magna. In ut tortor nec turpis
                    consectetur fringilla eget vel neque. Sed imperdiet
                    ullamcorper convallis. Duis viverra orci ex, eu fringilla
                    velit euismod non. Sed feugiat lobortis metus, quis euismod
                    nisl pretium ut.
                </p>
            </div>
        </div>
    );
}
